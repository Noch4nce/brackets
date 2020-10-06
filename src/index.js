module.exports = function check(str, bracketsConfig) {

  let st = [];
  let spl = str.split('');

  for (let i = 0; i < spl.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (spl[i] === bracketsConfig[j][0]) {
        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
          if (st[st.length - 1] === spl[i]) {
            st.pop();
            continue
          }
        }
        st.push(spl[i]);
        continue
      }

      if (spl[i] === bracketsConfig[j][1]) {
        let open = st.pop();
        if (open !== bracketsConfig[j][0]) {
          return false;
        }
      }
    }
  }

  return st.length === 0 ? true : false;
}

