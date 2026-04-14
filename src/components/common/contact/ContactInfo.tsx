const ContactInfo = ({ title, info }: { title?: string; info: string }) => {
  return (
    <div className="relative border-2 border-(--border) hover:border-(--text-primary) duration rounded-full p-8 group">
      <h1 className="text-3xl">{info}</h1>
      <div className="bg-(--bg-primary-inverse) text-(--text-primary-inverse) py-1 px-4 absolute top-0 -translate-y-1/2 rounded-full left-1/2 -translate-x-1/2 group-hover:opacity-100 opacity-0 duration">
        {title}
      </div>
    </div>
  );
};

export default ContactInfo;
