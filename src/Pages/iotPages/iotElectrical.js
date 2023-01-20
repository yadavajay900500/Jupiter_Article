import Artical from '../../Component/Artical/Artical'
import './iotElectrical.css'


export const IotElectrical = () => {
   return <>
      <div class="container ">
         <div class="row">
            <div class="col-9">
               <div className="iotHome">
                  <div class="services_section layout_padding">
                     <div class="container">
                       <Artical/>
                       <Artical/>
                       <Artical/>
                       <Artical/>
                       <Artical/>
                       <Artical/>
                       <Artical/>
                     </div>
                  </div>

               </div>
            </div>
            <div class="col-3">
               <div className="iotHome-1">
                  <ul className='articalTitleList'>
                     <input classname="searchbar"></input>
                     <hr/>
                     <li className='articalTitleItem'>Jai Shri Ram</li>
                     <li className='articalTitleItem'>Jai Shri Ram</li>
                     <li className='articalTitleItem'>jai Mata Di</li>
                     <li className='articalTitleItem'>Jai Mahakal</li>
                     <li className='articalTitleItem'>Jai Mahakal</li>
                     <li className='articalTitleItem'>Jai Mahakal</li>
                     <li className='articalTitleItem'>Om</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

   </>
}