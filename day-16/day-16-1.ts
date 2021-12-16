import hexToBinaryString from "../hexToBinaryString";

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
  callback(headerInfo.version);
  if (headerInfo.id === 4) {
    while (true) {
      let segment = getBits(state, 5);
      if (segment[0] === '0') {
        break;
      }
    }
  } else {
    const lengthTypeId = getBits(state, 1)[0];
    if (lengthTypeId === '0') {
      const bodyLength = parseInt(getBits(state, 15).join(''), 2);
      const subPackets = state.bitArray.slice(state.position, state.position + bodyLength);
      const subState: State = {
        bitArray: subPackets,
        position: 0,
      }
      while (parsePacket(subState, callback));
      state.position += bodyLength;
    } else {
      let nosOfSubPackets = parseInt(getBits(state, 11).join(''), 2);
      for (let i = 0; i < nosOfSubPackets; i++) {
        parsePacket(state, callback);
      }
    }
  }

  return true;
}

const day161 = function day161(data: Buffer) {
  const input = data.toString().trim()
    .split('\r\n');

  let versionSum: number = 0;
  parsePacket({
    bitArray: hexToBinaryString(input[0]).split(''),
    position: 0,
  }, (version: number) => {
    versionSum += version;
  });

  return versionSum;
}

export default day161;
