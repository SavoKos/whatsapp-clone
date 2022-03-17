import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_3256141_o42wexxxjaq.js'],
});

function Icon({ type, className, onClick, style, dataItems }) {
  return (
    <IconFont
      type={type}
      className={className + ' icon'}
      onClick={onClick}
      style={style}
      data-items={dataItems}
    />
  );
}

export default Icon;
