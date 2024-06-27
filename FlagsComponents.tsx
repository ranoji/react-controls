import React from "react";
import { ReactComponent as Gr } from "./flags/gr.svg";
import { ReactComponent as Ar } from "./flags/ar.svg";
import { ReactComponent as Hu } from "./flags/hu.svg";
import { ReactComponent as Th } from "./flags/th.svg";
import { ReactComponent as In } from "./flags/in.svg";
import { ReactComponent as Co } from "./flags/co.svg";
import { ReactComponent as Ma } from "./flags/ma.svg";
import { ReactComponent as Lk } from "./flags/lk.svg";
import { ReactComponent as Dk } from "./flags/dk.svg";
import { ReactComponent as Eg } from "./flags/eg.svg";
import { ReactComponent as Ie } from "./flags/ie.svg";
import { ReactComponent as De } from "./flags/de.svg";
import { ReactComponent as Hk } from "./flags/hk.svg";
import { ReactComponent as Vn } from "./flags/vn.svg";
import { ReactComponent as Tr } from "./flags/tr.svg";
import { ReactComponent as Id } from "./flags/id.svg";
import { ReactComponent as Za } from "./flags/za.svg";
import { ReactComponent as My } from "./flags/my.svg";
import { ReactComponent as Pk } from "./flags/pk.svg";
import { ReactComponent as Pe } from "./flags/pe.svg";
import { ReactComponent as Gb } from "./flags/gb.svg";
import { ReactComponent as Lu } from "./flags/lu.svg";
import { ReactComponent as Om } from "./flags/om.svg";
import { ReactComponent as Es } from "./flags/es.svg";
import { ReactComponent as Ph } from "./flags/ph.svg";
import { ReactComponent as Mx } from "./flags/mx.svg";
import { ReactComponent as Us } from "./flags/us.svg";
import { ReactComponent as No } from "./flags/no.svg";
import { ReactComponent as Fr } from "./flags/fr.svg";
import { ReactComponent as Cz } from "./flags/cz.svg";
import { ReactComponent as Cn } from "./flags/cn.svg";
import { ReactComponent as Br } from "./flags/br.svg";
import { ReactComponent as Cl } from "./flags/cl.svg";
import { ReactComponent as Kr } from "./flags/kr.svg";
import { ReactComponent as Sg } from "./flags/sg.svg";
import { ReactComponent as Au } from "./flags/au.svg";
import { ReactComponent as Il } from "./flags/il.svg";
import { ReactComponent as Jp } from "./flags/jp.svg";
import { ReactComponent as Tw } from "./flags/tw.svg";
import { ReactComponent as Ca } from "./flags/ca.svg";
import { ReactComponent as At } from "./flags/at.svg";
import { ReactComponent as Pl } from "./flags/pl.svg";
import { ReactComponent as Nz } from "./flags/nz.svg";

interface Flag {
  code: string;
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const flagComponents: Flag[] = [
  { code: "GR", Component: Gr },
  { code: "AR", Component: Ar },
  { code: "HU", Component: Hu },
  { code: "TH", Component: Th },
  { code: "IN", Component: In },
  { code: "CO", Component: Co },
  { code: "MA", Component: Ma },
  { code: "LK", Component: Lk },
  { code: "DK", Component: Dk },
  { code: "EG", Component: Eg },
  { code: "IE", Component: Ie },
  { code: "DE", Component: De },
  { code: "HK", Component: Hk },
  { code: "VN", Component: Vn },
  { code: "TR", Component: Tr },
  { code: "ID", Component: Id },
  { code: "ZA", Component: Za },
  { code: "MY", Component: My },
  { code: "PK", Component: Pk },
  { code: "PE", Component: Pe },
  { code: "GB", Component: Gb },
  { code: "LU", Component: Lu },
  { code: "OM", Component: Om },
  { code: "ES", Component: Es },
  { code: "PH", Component: Ph },
  { code: "MX", Component: Mx },
  { code: "US", Component: Us },
  { code: "NO", Component: No },
  { code: "FR", Component: Fr },
  { code: "CZ", Component: Cz },
  { code: "CN", Component: Cn },
  { code: "BR", Component: Br },
  { code: "CL", Component: Cl },
  { code: "KR", Component: Kr },
  { code: "SG", Component: Sg },
  { code: "AU", Component: Au },
  { code: "IL", Component: Il },
  { code: "JP", Component: Jp },
  { code: "TW", Component: Tw },
  { code: "CA", Component: Ca },
  { code: "AT", Component: At },
  { code: "PL", Component: Pl },
  { code: "NZ", Component: Nz },
];
