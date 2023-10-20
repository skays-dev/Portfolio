import { FC } from "react";

const Address: FC = (): JSX.Element => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:taoufyq.ayman@gmail.com">taoufyq.ayman@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel:+212659295575">+212 659295575</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
