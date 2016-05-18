
/** @record */
function Point() {}
 /** @type {number} */
Point.prototype.x;
 /** @type {number} */
Point.prototype.y;
interface Point {
  x: number;
  y: number;
}
/**
 * @param {Point} p
 * @return {number}
 */
function usePoint(p: Point): number {
  return p.x + p.y;
}

let /** @type {Point} */ p: Point = {x:1, y:1};
usePoint(p);
usePoint({x:1, y:1});
/** @record */
function BufferLike() {}
/* TODO: handle unnamed member:
[offset: number]: number;
*/
 /** @type {number} */
BufferLike.prototype.length;


/*
TODO: this example crashes the compiler -- I've mailed the team about it.
interface Point3 extends Point {
  z: number;
}
let p3: Point3 = {x:1, y:1, z:1};
usePoint(p3);
*/

// This type comes from Angular.
interface BufferLike {
  [offset: number]: number;
  length: number;
}
