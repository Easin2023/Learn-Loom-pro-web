const Title = ({title}) => {
     return (
          <div className="mt-12 ml-9">
               <div className="border-l-8 rounded-lg border-red-700">
                    <h1 className="text-2xl md:text-3xl ml-2 font-bold">{title}</h1>
               </div>
          </div>
     );
};

export default Title;