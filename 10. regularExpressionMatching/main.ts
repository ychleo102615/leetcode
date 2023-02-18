// https://leetcode.com/problems/regular-expression-matching/submissions/900204091/

function isMatch(s: string, p: string): boolean {
  const checkOn = (s_ptr: number, p_ptr: number): boolean => {
    return p[p_ptr] == "." || p[p_ptr] == s[s_ptr];
  };

  const examine = (s_ptr: number, p_ptr: number): boolean => {
    if (s_ptr == s.length && p_ptr == p.length) {
      // matched
      return true;
    }
    if (s_ptr > s.length || p_ptr > p.length) {
      return false;
    }

    if (p_ptr == p.length - 1 || p[p_ptr + 1] != "*") {
      // no need to check * pattern or it's not *

      if (checkOn(s_ptr, p_ptr)) {
        // continue
        return examine(s_ptr + 1, p_ptr + 1);
      } else return false;

      // return (checkOn(s_ptr, p_ptr)) ? examine(s_ptr + 1, p_ptr + 1) : false;
    }

    // * pattern
    const possibleCount = s.length - s_ptr;

    for (let count = 0; count < possibleCount; count++) {
      if (checkOn(s_ptr + count, p_ptr)) {
        // alternaive continue
        const result = examine(s_ptr + count + 1, p_ptr + 2);
        if (result) {
          return true;
        }
        continue;
      } else {
        break;
      }
    }
    // * pattern match zero element
    return examine(s_ptr, p_ptr + 2);
  };

  return examine(0, 0);
}
