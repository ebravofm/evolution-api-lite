import { WASocket } from 'baileys';

declare module 'baileys' {
  interface WASocket {
    offerCall(jid: string, isVideo: boolean): Promise<{
      id: string;
      to: string;
    }>;
    terminateCall(callId: string, to: string): Promise<void>;
  }
}
