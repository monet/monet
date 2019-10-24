import { expect } from "chai";

import { feature, given } from "../../testing/ghrkn";
import { isSetoid } from "../setoid";

feature`Setoid helpers`(() => {
  given`Setoid isSetoid returns true`(() => {
    expect(isSetoid({ equals: () => true })).to.be.true;
    expect(isSetoid({ equals: () => false })).to.be.true;
  });
  given`Setoid isSetoid returns true`(() => {
    expect(isSetoid({})).to.be.false;
  });
});
