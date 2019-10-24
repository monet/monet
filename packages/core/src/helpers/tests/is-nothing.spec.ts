import { expect } from "chai";

import { and, feature, given } from "../../testing/ghrkn";
import { isNothing } from "../is-nothing";

feature`Is nothing helpers`(() => {
  given`Empty values`(() => {
    expect(isNothing(null)).to.be.true
    expect(isNothing(undefined)).to.be.true
  });
  given`Not empty values`(() => {
    expect(isNothing(3)).to.be.false;
    expect(isNothing(false)).to.be.false
    expect(isNothing(true)).to.be.false
    expect(isNothing([])).to.be.false
    expect(isNothing({})).to.be.false
  });
});
