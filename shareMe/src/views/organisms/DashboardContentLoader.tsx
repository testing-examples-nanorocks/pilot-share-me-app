import ContentLoader from "react-content-loader"

type Props = {}

export default function DashboardContentLoader(props: Props) {
  return (
    <div className='overflow-hidden'>
      <ContentLoader
        speed={2}
        width={1050}
        height={400}
        viewBox="0 0 400 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
      
        <rect x="0" y="7" rx="0" ry="0" width="120" height="100" />
        <rect x="135" y="7" rx="0" ry="0" width="120" height="100" />
        <rect x="270" y="7" rx="0" ry="0" width="120" height="100" />
     
      </ContentLoader>
    </div>
  )
}