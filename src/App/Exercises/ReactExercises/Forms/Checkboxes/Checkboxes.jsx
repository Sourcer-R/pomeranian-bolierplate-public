import './Checkboxes.css';

export function Checkboxes({ list, onChange }) {
  console.log(list)
  // function handleClick(fieldName, isChecked) {
  //   onClick(fieldName, !isChecked);
  // }
  return list.map((item) => {
    return (
      <div
        key={item.fieldName}
        className="checkboxes__item"
        onClick={() => onChange(item.fieldName, !item.isChecked)}
      >
        <div
          className={`checkboxes__item-checkmark  ${
            item.isChecked ? 'checkboxes__item-checkmark--checked' : ''
          }`}
        >
          {item.isChecked && <>&#10003;</>}
        </div>
        {item.label}
      </div>
    );
  });
}
