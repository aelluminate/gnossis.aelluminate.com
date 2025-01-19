export function SideBarFooter() {
  return (
    <footer className="flex w-full pt-2">
      <div className="flex w-full flex-col items-start justify-between">
        <p className="text-xs text-stone-800 dark:text-stone-100">
          &copy; {new Date().getFullYear()} Aelluminate.
        </p>
      </div>
    </footer>
  )
}
