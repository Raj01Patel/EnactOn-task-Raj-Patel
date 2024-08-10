import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const BannerSlider = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <Swiper pagination={true} modules={[Pagination]}>
                <SwiperSlide>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            className="w-full object-cover"
                            src="https://s3-alpha-sig.figma.com/img/c854/7339/9a2d2e166ce9d76c073eb93dede3e63d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPEGaQYEvToSzdJ3TatYF3h5JI0Tb8qtKbYhRnsZGVwGChHe6VWvXkRBNQ8OFe8YefZqhvvO2~fXOGkkhc4ypwZBU87s6J5R8yPYuEmp34xUd-u0Nxqf03uhQsoFumMo03x9DXWoTUYvZulyrqsbMaCWrk9zCftrxfjS8DRJ7709nlut3kReHfB0G3uPt68wjjbquwcP61XEgFmYT5Ry2IYFWz61SvKcDl7iYxc0P5sWSkFuHE6xHkwhwZO3pKvz0hfseG-5LRXd4c3sGb3bd5WvsOxiKBKA3p9aat2bzCaCoLwtIlIomFMo7nXCjlRQtrGHCcquJOPw-KAwuR~BYQ__"
                            alt="Banner Slide"
                        />
                        <button className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-transparent border-2 border-white text-white w-[250px] md:w-[300px] font-bold text-lg md:text-2xl py-3 md:py-4 px-4 rounded">
                            Meet chef matt
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            className="w-full object-cover"
                            src="https://s3-alpha-sig.figma.com/img/c854/7339/9a2d2e166ce9d76c073eb93dede3e63d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPEGaQYEvToSzdJ3TatYF3h5JI0Tb8qtKbYhRnsZGVwGChHe6VWvXkRBNQ8OFe8YefZqhvvO2~fXOGkkhc4ypwZBU87s6J5R8yPYuEmp34xUd-u0Nxqf03uhQsoFumMo03x9DXWoTUYvZulyrqsbMaCWrk9zCftrxfjS8DRJ7709nlut3kReHfB0G3uPt68wjjbquwcP61XEgFmYT5Ry2IYFWz61SvKcDl7iYxc0P5sWSkFuHE6xHkwhwZO3pKvz0hfseG-5LRXd4c3sGb3bd5WvsOxiKBKA3p9aat2bzCaCoLwtIlIomFMo7nXCjlRQtrGHCcquJOPw-KAwuR~BYQ__"
                            alt="Banner Slide"
                        />
                        <button className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-transparent border-2 border-white text-white w-[250px] md:w-[300px] font-bold text-lg md:text-2xl py-3 md:py-4 px-4 rounded">
                            Meet chef matt
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            className="w-full object-cover"
                            src="https://s3-alpha-sig.figma.com/img/c854/7339/9a2d2e166ce9d76c073eb93dede3e63d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPEGaQYEvToSzdJ3TatYF3h5JI0Tb8qtKbYhRnsZGVwGChHe6VWvXkRBNQ8OFe8YefZqhvvO2~fXOGkkhc4ypwZBU87s6J5R8yPYuEmp34xUd-u0Nxqf03uhQsoFumMo03x9DXWoTUYvZulyrqsbMaCWrk9zCftrxfjS8DRJ7709nlut3kReHfB0G3uPt68wjjbquwcP61XEgFmYT5Ry2IYFWz61SvKcDl7iYxc0P5sWSkFuHE6xHkwhwZO3pKvz0hfseG-5LRXd4c3sGb3bd5WvsOxiKBKA3p9aat2bzCaCoLwtIlIomFMo7nXCjlRQtrGHCcquJOPw-KAwuR~BYQ__"
                            alt="Banner Slide"
                        />
                        <button className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-transparent border-2 border-white text-white w-[250px] md:w-[300px] font-bold text-lg md:text-2xl py-3 md:py-4 px-4 rounded">
                            Meet chef matt
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            className="w-full object-cover"
                            src="https://s3-alpha-sig.figma.com/img/c854/7339/9a2d2e166ce9d76c073eb93dede3e63d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPEGaQYEvToSzdJ3TatYF3h5JI0Tb8qtKbYhRnsZGVwGChHe6VWvXkRBNQ8OFe8YefZqhvvO2~fXOGkkhc4ypwZBU87s6J5R8yPYuEmp34xUd-u0Nxqf03uhQsoFumMo03x9DXWoTUYvZulyrqsbMaCWrk9zCftrxfjS8DRJ7709nlut3kReHfB0G3uPt68wjjbquwcP61XEgFmYT5Ry2IYFWz61SvKcDl7iYxc0P5sWSkFuHE6xHkwhwZO3pKvz0hfseG-5LRXd4c3sGb3bd5WvsOxiKBKA3p9aat2bzCaCoLwtIlIomFMo7nXCjlRQtrGHCcquJOPw-KAwuR~BYQ__"
                            alt="Banner Slide"
                        />
                        <button className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-transparent border-2 border-white text-white w-[250px] md:w-[300px] font-bold text-lg md:text-2xl py-3 md:py-4 px-4 rounded">
                            Meet chef matt
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
