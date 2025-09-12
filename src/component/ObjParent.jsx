import ObjChild from "./ObjChild";

const ObjParent = () => {
  const btnClick = () => {
    alert("Hello!");
  };

  return (
    <>
      <div>
        <ObjChild desc="This is from parent passed as Props" />
      </div>
      <div>
        <ObjChild passpara={btnClick} />
      </div>
    </>
  );
};

export default ObjParent;
