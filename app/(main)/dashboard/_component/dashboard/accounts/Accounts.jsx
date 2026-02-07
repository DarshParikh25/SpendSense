import ChoiceCard from "./ChoiceCard";

import AddAccount from "../add-account/AddAccount";

const Accounts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {/* Add Account Card and Drawer */}
      <AddAccount />

      {/* Cards for all Accounts */}
      <ChoiceCard />
    </div>
  );
};

export default Accounts;
