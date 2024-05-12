import MainLayout from "@/components/main/MainLayout";
import NewsHero from "@/components/news/Hero";
import NewsList from './../components/news/List';
import PopularList from "@/components/news/Popular";



async function getData(){
  let slider = (await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`, { cache: 'no-store' })).json())['data']
  let featured = (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`, { cache: 'no-store' })).json())['data']
  let popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`, { cache: 'no-store' })).json())['data']
  let latest = (await (await fetch(`${process.env.HOST}/api/news/latest`, { cache: 'no-store' })).json())['data']
  


  return {slider:slider, featured:featured, popular:popular, latest:latest}

}


const page = async() => {
  let data = await getData()
  return (
    <MainLayout>
      <NewsHero data ={data} />

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <h5>LATEST</h5>
          <hr className="mb-3"/>
            <NewsList list={data['latest']}/>
        </div>
        <div className="col-span-1">
          <h5>POPULAR</h5>
          <hr className="mb-3"/>
            <PopularList list={data['popular']}/>
        </div>


      </div>
    </MainLayout>
  );
};

export default page;