import React, { useEffect, useState } from 'react';

export default function HeaderDate() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    function updateDate() {
      setCurrentDate(new Date());
    }

    const now = new Date();
    // 다음 자정까지 남은 시간 계산
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();
    // 자정에 한 번 실행
    const timeoutId = setTimeout(updateDate, msUntilMidnight);
    // 매일 자정에 업데이트
    const intervalId = setInterval(updateDate, 24 * 60 * 60 * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div>
        <div>{currentDate.getDate()}</div>
        <div>
          <span>{currentDate.getMonth() + 1}</span>
          <span>{currentDate.getFullYear()}</span>
        </div>
      </div>
      <div>{currentDate.getDay()}</div>
    </div>
  );
}
