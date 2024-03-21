function Footer({ items }) {
  let itemCount = items.length;
  let completedItems = items.filter((item) => item.isChecked).length;
  let percentage = ((completedItems / itemCount) * 100).toFixed(3); // Rounding off to 3 decimal places
  console.log(itemCount);
  return (
    <div className="footerText" style={{ textAlign: "center" }}>
      <p>
        You have {itemCount} item in your list, and you already completed{" "}
        {completedItems}. Completion: {percentage}%.
      </p>
    </div>
  );
}

export default Footer;
