const config = {
  /**
   * Game configuration
   *
   * All variables here tweak the design and UI of the game
   * so please be very careful when updating. Assets and images
   * are listed here as well -- so double check dimensions.
   */
  name: 'navarra',
  version: '0.0.1',
  map: {
    tileset: { // How big is the tileset?
      width: 768,
      height: 800,
      tile: { // How big is each tile?
        width: 32,
        height: 32,
      },
    },
    viewport: { // How big will our view be?
      x: 15,
      y: 10,
    },
    size: { // How big will our map be?
      x: 50,
      y: 50,
    },
  },
  assets: [
    'src/assets/all_tiles.png', // Tileset
    'src/assets/player1.png', // Player
  ],
};

module.exports = config;