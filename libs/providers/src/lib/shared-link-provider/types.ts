import React, { AnchorHTMLAttributes } from 'react';

export interface SharedLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  fasih?: string;
}
export type SharedLink = React.FC<SharedLinkProps>;

export interface SharedLinkContextValue {
  DerivLink: SharedLink;
}
