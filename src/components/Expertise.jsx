import {expertise} from "../data/constant"

const Expertise = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="wrapper md:flex md:gap-12">
        <div className="left mb-10 md:mb-0 md:w-2/4">
          <div className="md:sticky md:top-24">
            <h1 className="text-7xl">Expertise</h1>
            <p className="mt-4 opacity-80">
              A focused approach to design, development, and interaction bringing
              ideas to life through thoughtful visuals, clean code, and meaningful motion.
            </p>
          </div>
        </div>

        <div className="right md:w-2/4  ">
          {expertise.map(({ order, heading, info, skills }) => (
            <div key={order} className= "h-96 flex flex-col justify-between p-8 my-5 rounded-2xl bg-ink text-bg ">
              <div className="flex items-baseline gap-6">
                <h3 className="text-2xl opacity-60 ">{order}</h3>
                <h3 className="text-2xl font-semibold">{heading}</h3>
              </div>

            <div>
                <p className="mt-4 opacity-80">{info}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-sm">
                    [ {skill} ]
                  </li>
                ))}
              </ul>
            </div>      
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
