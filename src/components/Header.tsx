type Props = {
    children: React.ReactNode;
}

const Header = ({children}: Props) => {

  return (
    <h1 className="basis-3/5 font-bold font-sans text-3xl text-red-950">
        {children}
    </h1>
  )
}

export default Header