function Layout({children}) {
  return (
    <div className="flex flex-col w-100vw max-w-screen-2xl items-center mt-20 mx-auto md:overflow-hidden">
      {children}
    </div>
  )
}

export default Layout
