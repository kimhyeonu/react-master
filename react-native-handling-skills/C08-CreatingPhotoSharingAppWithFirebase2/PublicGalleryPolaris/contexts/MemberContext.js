import React, { createContext, useContext, useState } from 'react';

const MemberContext = createContext(null);

export function MemberContextProvider({ children }) {
  const [member, setMember] = useState(null);

  return (
    <MemberContext.Provider children={children} value={{ member, setMember }} />
  );
}

export function useMemberContext() {
  const memberContext = useContext(MemberContext);
  if (!memberContext) {
    throw new Error('memberContext가 존재하지 않습니다.');
  }

  return memberContext;
}
