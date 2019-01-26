import Skill from './index';
import world from '../world';
import { foregroundObjects } from '../data/foreground';
import Query from '../data/query';

export default class Mining extends Skill {
  constructor(playerIndex, rockId) {
    super(playerIndex);
    this.player = world.players[playerIndex];
    this.rockId = rockId;
  }

  get rock() {
    return foregroundObjects.find(e => e.id === this.rockId);
  }

  /**
   * Checks to see if the player has a pickaxe in their inventory or is weilding one.
   *
   * @returns {boolean}
   */
  checkForPickaxe() {
    const pickaxe = this.player.inventory.find(i => i.id.includes('pickaxe')) || this.player.wear.right_hand;
    const itemFound = Query.getItemData(pickaxe.id);

    return Mining.isAPickaxe(itemFound) ? itemFound : false;
  }

  /**
   * Checks to see if the item being inspected is a pickaxe
   *
   * @param {object} item The data item we are inspecting
   * @returns {boolean}
   */
  static isAPickaxe(item) {
    return item.actions.includes('mine') && item.id.includes('pickaxe');
  }

  /**
   * Swing your pickaxe at a rock to mine
   */
  pickAtRock() {
    let counter = 0;
    console.log(`Mining for ${this.rock.resources}`);

    return new Promise((resolve, reject) => {
      if (this.checkForPickaxe()) {
        const action = setInterval(() => {
          counter += 1;
          console.log('Picking at rock...');
          if (counter === 1) {
            clearInterval(action);
            resolve(this.rock);
          }
        }, 1000);
      } else {
        reject(new Error('Criteria to mine not sufficient.'));
      }
    });
  }

  /**
   * Inspect a rock to be told what it is
   */
  prospect() {
    const id = this.rock;
    console.log(id);

    // Get the ID of the rock
    // Return back the name of the rock via chat
  }
}
