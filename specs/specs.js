
describe('translate', function() {
  it("returns the user's input if no rules are matched", function() {
    expect(translate("cat")).to.equal("cat");
  });
});

describe('promptForInput', function() {
  it("prompts the user if input is null", function() {
    expect(promptForInput("")).to.equal("Please enter text or a phrase.");
  });
});

describe('replaceE', function() {
  it("replaces the letter 'e' with '3'", function() {
    expect(replaceE("egg")).to.equal("3gg");
  });
});

describe('replaceO', function() {
  it("replaces the letter 'o' with '0'", function() {
    expect(replace0("zoo")).to.equal("z00");
  });
});

describe('replaceI', function() {
  it("replaces the letter 'I' with '1'", function() {
    expect(replaceI("Indiana")).to.equal("1ndiana");
  });
});

describe('replaceS', function() {
  it("replaces the letter 's' with 'z'", function() {
    expect(replaceS("cats")).to.equal("catz");
  });
});

describe('replaceS', function() {
  it("doesn't replace the letter 's' if it is the first letter in the word", function() {
    expect(replaceS("sex")).to.equal("sex");
  });
});
