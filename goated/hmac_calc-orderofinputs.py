// Goat Originals games
// For Reference

type SeedPairAndNonce {
    server_seed: string,
    client_seed: string,
    nonce: number
}

const generateBytes = (
  seed: SeedPairAndNonce,
  cursor: number
): Buffer => {
  return crypto.createHash("sha256")
    .update(`${seed.server_seed}:${seed.client_seed}:${seed.nonce}:${cursor}`)
    .digest();
};

const generateFloats = (
  seed: SeedPairAndNonce,
  count: number
): number[] => {
  // One SHA-256 round generates 256 bits or 32 bytes or 8 floats
  const numberOfSHARoundsRequired = Math.ceil(count/8);
  const buffer = Buffer.alloc(numberOfSHARoundsRequired * 32);
  for (let i = 0; i < numberOfSHARoundsRequired; i++) {
    generateBytes(seed, i).copy(buffer, i * 32);
  }
  const floats: number[] = [];
  for (let i = 0; i < count; i++) {
    floats.push(0);
    const start = i * 4;
    for (let j = 0; j < 4; j++) {
      floats[i] += buffer[start + j] / (256 ** (j + 1));
    }
  }
  return floats;
};

const diceRollFromSeed = (
  seed: SeedPairAndNonce
) => {
  const randomFloat = generateFloats(seed, 1)[0];
  return Math.round(randomFloat * 10000) / 100;
};

const limboMultiplierFromSeed = (
  seed: SeedPairAndNonce,
  gameEdge: number
) => {
  const float = 1 - generateFloats(seed, 1)[0];
  const floatWithHouseEdge = (1e8) / (float * 1e8) * (1 - gameEdge/100);
  return Math.max(1, Math.floor(floatWithHouseEdge * 100) / 100.0);
};

const plinkoPathFromSeed = (
  seed: SeedPairAndNonce,
  numberOfRows: number
) => {
  const floats = generateFloats(seed, numberOfRows);
  return [...floats].map((float) => float < 0.5 ? "L" : "R");
};

const mineLocationsFromSeed = (
  seed: SeedPairAndNonce,
  numberOfMines: number
) => {
  const gridCellsRasterOrder = [...Array(25).keys()];
  const floats = generateFloats(seed, numberOfMines);
  return floats.map((float) => {
    const index = Math.floor(float * gridCellsRasterOrder.length);
    return gridCellsRasterOrder.splice(index, 1)[0];
  });
};

const shuffledDeckFromSeed = (
  seed: SeedPairAndNonce,
) => {
  const floats = generateFloats(seed, 52);
  const suit = ["S", "H", "C", "D"];
  const rank = ["A", ...[...Array(9).keys()].map((i) => i + 2), "J", "Q", "K"];
  return floats.map((float) => {
    const cardIdx = Math.floor(float * 52);
    return `${rank[cardIdx % 13]}${suit[Math.floor(cardIdx / 13)]}`;
  });
};

const kenoSelectionFromSeed = (
  seed: SeedPairAndNonce
) => {
  const startingSet = [...Array(40).keys()];
  const floats = generateFloats(seed, 10);
  return floats.map((float) => {
    const index = Math.floor(float * startingSet.length);
    return startingSet.splice(index, 1)[0];
  });
};

const wheelSpinFromSeed = (
  seed: SeedPairAndNonce,
  segments: number
) => {
  const floats = generateFloats(seed, 1);
  return Math.floor(floats[0] * segments);
};
