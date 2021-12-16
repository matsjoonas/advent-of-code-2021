import hexToBinaryString from "../hexToBinaryString";
import {parse} from "url";

interface State {
  bitArray: string[],
  position: number,
}

const getBits = function getBits(state: State, n: number) {
  const bits = state.bitArray.slice(state.position, state.position + n);
  state.position = state.position + n;
  return bits;
}

const parseHeader = function parseHeader(rawHeader: string) {
  return {
    version: parseInt(rawHeader.substring(0, 3), 2),
    id: parseInt(rawHeader.substring(3, 6), 2),
  }
}

const parsePacket = function parsePacket(state: State, callback: Function): boolean {
  const headerBits = getBits(state, 6);
  if (headerBits.length !== 6) {
    return false;
  }
  const headerInfo = parseHeader(headerBits.join(''));

  if (headerInfo.id === 4) {
    let binaryValue = '';
    while (true) {
      let segment = getBits(state, 5);
      binaryValue += segment.slice(1, 5).join('');
      if (segment[0] === '0') {
        break;
      }
    }
    callback(parseInt(binaryValue, 2));
  } else {
    const lengthTypeId = getBits(state, 1)[0];
    const subValues: number[] = [];
    if (lengthTypeId === '0') {
      const bodyLength = parseInt(getBits(state, 15).join(''), 2);
      const subPackets = state.bitArray.slice(state.position, state.position + bodyLength);
      const subState: State = {
        bitArray: subPackets,
        position: 0,
      }
      while (parsePacket(subState, (value: number) => subValues.push(value))) ;
      state.position += bodyLength;
    } else {
      let nosOfSubPackets = parseInt(getBits(state, 11).join(''), 2);
      for (let i = 0; i < nosOfSubPackets; i++) {
        parsePacket(state, (value: number) => subValues.push(value));
      }
    }
    let value;
    if (headerInfo.id === 0) {
      value = subValues.reduce((acc, cur) => acc + cur, 0);
    } else if (headerInfo.id === 1) {
      value = subValues.reduce((acc, cur) => acc * cur, 1);
    } else if (headerInfo.id === 2) {
      value = Math.min(...subValues);
    } else if (headerInfo.id === 3) {
      value = Math.max(...subValues);
    } else if (headerInfo.id === 5) {
      value = subValues[0] > subValues[1] ? 1 : 0;
    } else if (headerInfo.id === 6) {
      value = subValues[0] < subValues[1] ? 1 : 0;
    } else if (headerInfo.id === 7) {
      value = subValues[0] === subValues[1] ? 1 : 0;
    }
    callback(value);
  }

  return true;
}

const day162 = function day162(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  let finalValue;
  parsePacket({
    bitArray: hexToBinaryString(input[0]).split(''),
    position: 0,
  }, (value: number) => {
    finalValue = value;
  });

  return finalValue;
}

export default day162;
