function Group() {
  return (
    <div className="absolute contents left-[20px] top-[14px]">
      <div className="absolute bg-white border border-[#eef1f4] border-solid h-[76px] left-[20px] rounded-[6px] top-[14px] w-[60px]" />
      <div className="absolute bg-[#eef1f4] h-[5px] left-[26px] rounded-[2px] top-[28px] w-[23px]" />
      <div className="absolute bg-[#eef1f4] h-[5px] left-[26px] rounded-[2px] top-[37px] w-[13px]" />
      <div className="absolute bg-[#eef1f4] h-[5px] left-[26px] rounded-[2px] top-[46px] w-[48px]" />
      <div className="absolute bg-[#eef1f4] h-[5px] left-[26px] rounded-[2px] top-[55px] w-[39px]" />
    </div>
  );
}

export default function ReadyToScanScanningAFile() {
  return (
    <div className="relative size-full" data-name="Ready to Scan / Scanning a file">
      <Group />
    </div>
  );
}