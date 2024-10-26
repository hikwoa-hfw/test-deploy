const Contact = () => {
  return (
    <div className="container mx-auto mt-36 flex h-[calc(100vh+100px)] flex-col items-center justify-center">
      <h3 className="text-center text-9xl font-bold">Let's talk!</h3>
      <a
        href="mailto:hibbanhfw@gmail.com"
        className="mt-10 rounded-full bg-black px-8 py-4 text-lg text-white"
      >
        mail me!
      </a>
    </div>
  );
};

export default Contact;
