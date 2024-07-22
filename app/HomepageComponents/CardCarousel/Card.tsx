import Image from "next/image"

interface Props {
  imageUrl: string, 
  animeTitleEnglish : string, 
  animeTitleJapanese : string, 
  animeType: string, 
  animeStatus: string, 
  animeRating: string, 
}

const Card:React.FC<Props> = async ({ imageUrl, animeTitleEnglish, animeTitleJapanese, animeType, animeStatus, animeRating }) => {

  return (
      <div className="carousel-item card relative w-[6.63563rem] tablet:w-56">
        <div className="relative image w-full h-[9.39063rem] rounded-[0.47rem] mb-[0.47rem] tablet:h-[19.8125rem] overflow-hidden">
          <Image src={imageUrl} alt="anime-poster" fill className="object-cover" sizes="100%" priority={true} quality={100}/>
        </div>
          <div className="anime-content">
            <h3 className="text-white text-[12px] leading-[12px] font-semibold mb-[0.3555rem] tablet:mb-3 tablet:text-lg tablet:!leading-5">{animeTitleEnglish}</h3>
            <h4 className="text-white text-[8px] leading-[8px] font-normal mb-[0.3555rem] tablet:text-xs tablet:mb-3">{animeTitleJapanese}</h4>
            <div className="anime-badges flex mb-[0.3555rem] tablet:mb-3">
              <div className="bg-accent rounded-full px-[0.3rem] mr-[0.237rem] tablet:px-[0.63rem]">
                <p className="text-[8px] leading-[0.59244rem] font-medium tablet:text-xs tablet:leading-4">{animeType}</p>
              </div>
              <div className="bg-accent text-[8px] leading-[0.59244rem] font-medium rounded-full px-[0.3rem] tablet:px-[0.63rem]">
                <p className="text-[8px] leading-[0.59244rem] font-medium tablet:text-xs tablet:leading-4">
                  {animeStatus}
                </p>
              </div>
            </div>
            <div className="flex justify-between tablet:mb-3">
              <p className="text-light-blue italic text-[0.3555rem] tablet:text-xs">{animeRating}</p>
            
            </div>
          </div>
      </div>

  )
}

export default Card