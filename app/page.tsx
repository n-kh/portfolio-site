import CrawlerProfile from '@/components/CrawlerProfile';
import LevelDisplay from '@/components/LevelDisplay';
import PowerSheet from '@/components/PowerSheet';
import CrawlLog from '@/components/CrawlLog';
import MemeCallout from '@/components/MemeCallout';
import RequestAudienceCTA from '@/components/RequestAudienceCTA';
import { CURRENT_LEVEL } from '@/data/levels';

export default function Home() {
  return (
    <>
      <CrawlerProfile />
      <LevelDisplay level={CURRENT_LEVEL} xpProgress={0.65} />
      <PowerSheet />
      <CrawlLog />
      <MemeCallout />
      <RequestAudienceCTA />
    </>
  );
}
