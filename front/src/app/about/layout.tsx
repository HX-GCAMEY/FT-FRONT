function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1> Esta seria la side bar</h1>
      <main>{children}</main>
    </div>
  );
}

export default AboutLayout;
