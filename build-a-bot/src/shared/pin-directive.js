function applyStyle(element, binding) {
  //    console.log('arg:', binding.arg, 'modifiers:', binding.modifiers);
  // can be used when using only 1 arg?
  // v-pin:position.top.right;
  // if (binding.arg !== 'position') return;

  // use when using args with modifiers
  /*     Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = '5px';
    }); */

  // use when using binding values
  // v-pin="{ key:value, key1: value1 }"
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

export default {
  bind: (element, binding) => {
    applyStyle(element, binding);
  },

  update: (element, binding) => {
    applyStyle(element, binding);
  },
  inserted: () => {
    // fires whenever the bound element is inserted into hte parnet node
  },
  componentUpdated: () => {
    // fired when component is update, but only after all children have been updated
  },
  unbind: () => {
    // when the firective is unbound from it's parent component
  },

  // this will bind to BOTH bind and update directive hooks
  /*   export default function (element, binding) {

  } */

};
