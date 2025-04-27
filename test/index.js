import * as Diff from '../lib';

import {expect} from 'chai';

describe('root exports', function() {
  it('should export APIs', function() {
    expect(Diff.Diff).to.exist;

    expect(Diff.diffChars).to.exist;
    expect(Diff.diffWords).to.exist;
    expect(Diff.diffWordsWithSpace).to.exist;
    expect(Diff.diffLines).to.exist;
    expect(Diff.diffTrimmedLines).to.exist;
    expect(Diff.diffSentences).to.exist;

    expect(Diff.diffCss).to.exist;
    expect(Diff.diffJson).to.exist;

    expect(Diff.diffArrays).to.exist;

    expect(Diff.structuredPatch).to.exist;
    expect(Diff.createTwoFilesPatch).to.exist;
    expect(Diff.createPatch).to.exist;
    expect(Diff.applyPatch).to.exist;
    expect(Diff.applyPatches).to.exist;
    expect(Diff.parsePatch).to.exist;
    expect(Diff.convertChangesToDMP).to.exist;
    expect(Diff.convertChangesToXML).to.exist;
    expect(Diff.canonicalize).to.exist;

    let a = '';
    let b = '';
    for (let i = 0; i < 1024 * 1024 * 5; i++) {
      a += '' + Math.random();
      b += '' + Math.random();
      if (i % 5 === 0) {
        a += '\n';
        b += '\n';
      }
    }
    const result = Diff.createPatch('', a, b, '', '', {timeout: 50, returnPartialResults: true});
    expect(result).to.exist;
  });
});
