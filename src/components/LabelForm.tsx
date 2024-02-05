const LabelForm = ({ children }: { children: React.ReactNode }) => (
  <label className="text-white flex flex-col gap-3 font-bold text-md">
    {children}
  </label>
);

export default LabelForm;
