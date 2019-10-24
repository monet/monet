import { expect } from "chai";

import { and, feature, given, scenario, then, when } from "../../testing/ghrkn";
import { isFunction } from "../function";
feature`Function helpers`(() => {
  given`Function isFunction returns true`(() => {
    expect(isFunction(()=>{})).to.be.true;
    expect(isFunction(()=>true)).to.be.true;
    expect(isFunction(()=>({}))).to.be.true;
  });
  given`Function isFunction returns false`(() => {
    expect(isFunction({})).to.be.false;
    expect(isFunction(true)).to.be.false;
    expect(isFunction(3)).to.be.false;
  });
});
