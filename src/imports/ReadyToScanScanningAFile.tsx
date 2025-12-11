import { imgRectangle9218 } from "./svg-3e2m3";

function Group() {
  return (
    <div className="absolute contents left-[20px] top-[14px]">
      <div className="absolute bg-white border border-[#eef1f4] border-solid h-[76px] left-[20px] rounded-[6px] top-[14px] w-[60px]" />
      <div className="absolute bg-[#eef1f4] h-[5px] left-[25px] rounded-[2px] top-[29px] w-[22.929px]" />
      <div className="absolute bg-[#eef1f4] h-[5px] left-[25px] rounded-[2px] top-[38px] w-[14.405px]" />
      <div className="absolute bg-[#eef1f4] h-[5px] left-[25px] rounded-[2px] top-[47px] w-[50px]" />
      <div className="absolute bg-[#eef1f4] h-[5px] left-[25px] rounded-[2px] top-[56px] w-[41px]" />
    </div>
  );
}

function Fade() {
  return (
    <div
      className="absolute contents left-[12px] top-[22px]"
      data-name="Fade 1"
    >
      <div
        className="absolute bg-[#3f68ff] h-[2px] left-[12px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_-8px] mask-size-[60px_76px] rounded-[6px] top-[22px] w-[77px]"
        style={{ maskImage: `url('${imgRectangle9218}')` }}
      />
      <div
        className="absolute bg-gradient-to-b from-[#3f68ff] h-[29px] left-[12px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[8px_-9px] mask-size-[60px_76px] opacity-20 to-[rgba(63,104,255,0)] top-[23px] w-[77px]"
        style={{ maskImage: `url('${imgRectangle9218}')` }}
      />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[12px] top-[22px]">
      <Fade />
    </div>
  );
}

function MaskGroup() {
  return (
    <div
      className="absolute contents left-[20px] top-[14px]"
      data-name="Mask group"
    >
      <Group1 />
    </div>
  );
}

export default function ReadyToScanScanningAFile() {
  return (
    <div
      className="relative size-full"
      data-name="Ready to Scan / Scanning a file"
    >
      <Group />
      <MaskGroup />
    </div>
  );
}