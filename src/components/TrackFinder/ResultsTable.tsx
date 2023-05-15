import { useTranslation } from 'react-i18next';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface ResultsTableProps {
  priceData:
    | [
        {
          artist: string;
          song: string;
          prices: { amazon: number; itunes: number; beatport: number; bandcamp: number };
        }
      ]
    | null;
}

const ResultsTable = ({ priceData }: ResultsTableProps) => {
  const { t } = useTranslation();

  return (
    <div className='overflow-x-auto w-11/12'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th className='text-base normal-case'>{t('resultstable.header.store')}</th>
            <th className='text-base normal-case'>{t('resultstable.header.quality')}</th>
            <th className='text-base normal-case'>{t('resultstable.header.artistsshare')}</th>
            <th className='text-base normal-case'>{t('resultstable.header.price')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <div className='flex items-center space-x-5'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img src='/logo_amazonmusic.png' alt='Avatar Tailwind CSS Component' />
                  </div>
                </div>
                <div className='md:block hidden'>
                  <div className='font-bold'>Amazon Music</div>
                  <div className='text-sm opacity-50'>United States</div>
                </div>
              </div>
            </th>
            <td>
              <div>MP3</div>
              <div className='text-sm opacity-50'>320kbps</div>
            </td>

            <td className=''>
              0.49€
              <span
                className='tooltip ml-1 inline-block text-sm opacity-50'
                data-tip={"Artist's share is 50% on Amazon Music."}
              >
                <AiOutlineInfoCircle size={16} />
              </span>
            </td>
            <td>
              <div className='flex items-center gap-4'>
                <div className='inline-block'>0.99€</div>
                <div className='flex justify-center flex-1'>
                  <button className='btn btn-ghost text-base normal-case'>
                    <FaExternalLinkSquareAlt size={32} className='text-secondary' />
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <div className='flex items-center space-x-5'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img src='/logo_bandcamp.svg' alt='Avatar Tailwind CSS Component' />
                  </div>
                </div>
                <div className='md:block hidden'>
                  <div className='font-bold'>Bandcamp</div>
                </div>
              </div>
            </th>
            <td>
              <div>MP3</div>
              <div className='text-sm opacity-50'>320kbps</div>
            </td>

            <td>
              0.79€
              <span
                className='tooltip ml-1 inline-block text-sm opacity-50'
                data-tip={"Artist's share is 80% on Bandcamp."}
              >
                <AiOutlineInfoCircle size={16} />
              </span>
            </td>
            <td>
              <div className='flex items-center gap-4'>
                <div className='inline-block'>0.99€</div>
                <div className='flex justify-center flex-1'>
                  <button className='btn btn-ghost text-base normal-case'>
                    <FaExternalLinkSquareAlt size={32} className='text-secondary' />
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <div>FLAC</div>
            </td>

            <td>
              0.79€
              <span
                className='tooltip ml-1 inline-block text-sm opacity-50'
                data-tip={"Artist's share is 80% on Bandcamp."}
              >
                <AiOutlineInfoCircle size={16} />
              </span>
            </td>
            <td>
              <div className='flex items-center gap-4'>
                <div className='inline-block'>0.99€</div>
                <div className='flex justify-center flex-1'>
                  <button className='btn btn-ghost text-base normal-case'>
                    <FaExternalLinkSquareAlt size={32} className='text-secondary' />
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <div className='flex items-center space-x-5'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img src='/logo_beatport.svg' alt='Avatar Tailwind CSS Component' />
                  </div>
                </div>
                <div className='md:block hidden'>
                  <div className='font-bold'>Beatport</div>
                </div>
              </div>
            </th>
            <td>
              <div>MP3</div>
              <div className='text-sm opacity-50'>320kbps</div>
            </td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th>
              <div className='flex items-center space-x-5'>
                <div className='avatar'>
                  <div className='mask mask-squircle w-12 h-12'>
                    <img src='/logo_itunesstore.jpg' alt='Avatar Tailwind CSS Component' />
                  </div>
                </div>
                <div className='md:block hidden'>
                  <div className='font-bold'>iTunes Store</div>
                </div>
              </div>
            </th>
            <td>
              <div>MP3</div>
              <div className='text-sm opacity-50'>320kbps</div>
            </td>
            <td>
              0.59€
              <span
                className='tooltip ml-1 inline-block text-sm opacity-50'
                data-tip={"Artist's share is 60% on the iTunes Store."}
              >
                <AiOutlineInfoCircle size={16} />
              </span>
            </td>
            <td>
              <div className='flex items-center gap-4'>
                <div className='inline-block'>0.99€</div>
                <div className='flex justify-center flex-1'>
                  <button className='btn btn-ghost text-base normal-case'>
                    <FaExternalLinkSquareAlt size={32} className='text-secondary' />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>

        {/* foot */}
        {/* <tfoot>
          <tr>
            <th />
            <th />
            <th />
            <th />
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
};

export default ResultsTable;