import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'; // Include the default slider styles
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryDataLoad from './CategoryDataLoad';
import SharedTitle from './Sharedtitle';

const categories = ["Computers", "Phones", "Smart Watches", "Chargers", "Power Banks"];

const Banner = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    
    const fetchUsers = async () => {
        const response = await axios.get(`https://product-project-server.vercel.app/allproducts`);
        return response.data;
      };

   
    const { data: allProducts = [], isLoading:allLoading } = useQuery({
        queryKey: ["allProducts"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
  return (

    <div>

    
    <AwesomeSlider className='h-[45rem]'>
      <div data-src="/b1.jpg" />
      <div data-src="/b4.jpg" />
      <div data-src="/b3.jpeg" />
    </AwesomeSlider>

        <div className='mt-30'>
        <SharedTitle className="mt-40" heading={"All Category Wise Gadget"} subheading={"Please Order to Available Product"}></SharedTitle>

        </div>
    <div className="text-center mt-20 px-4">
      <Tabs selectedIndex={selectedCategoryIndex} onSelect={setSelectedCategoryIndex}>
        {/* Tab List */}
        <TabList className="flex flex-wrap justify-center items-center gap-3 pb-2 border-b-2">
          {categories.map((category, index) => (
            <Tab
              key={index}
              className="px-4 py-2 bg-gray-500 text-yellow-400 text-lg font-semibold rounded-md cursor-pointer hover:text-blue-500 focus:outline-none transition-all"
              selectedClassName="border-b-2 border-blue-500 text-blue-500"
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {/* Tab Panels */}
        {categories.map((category, index) => (
          <TabPanel key={index} className="p-4 bg-gray-50 rounded-lg">
            <CategoryDataLoad category={category} allProducts={allProducts} />
          </TabPanel>
        ))}
      </Tabs>
    </div>



</div>
  );
};

export default Banner;
