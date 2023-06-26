import MainSidebarBlock from "./mainSidebarBlock/mainSidebarBlock"

function MainSidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar" />
      </div>
      <MainSidebarBlock />
    </div>
  )
}

export default MainSidebar
