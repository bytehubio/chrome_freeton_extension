const template = `
<div class='fadeIn'>
  <network-select></network-select>
  <div class='text-md gtr-b-2x'>Hello</div>
  <div bind='passphrase' class='color-dim gtr-b'></div>
</div>
`;

function render(app, params) {
  return utils.createComponent(app, params, null, template);
}

export default render;
