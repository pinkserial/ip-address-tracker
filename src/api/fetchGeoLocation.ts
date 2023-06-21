import { GeoLocation } from "../types/geoLocation";

const baseUrl = "https://geo.ipify.org/api/v2/country,city";

const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

const isIp = (addr: string): boolean =>
  addr.search(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/) !== -1;

const isDomain = (domain: string): boolean =>
  domain.search(
    /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
  ) !== -1;

const fetchForIpAddress = async (ipAddress: string): Promise<GeoLocation> => {
  const url = `${baseUrl}?apiKey=${apiKey}&ipAddress=${ipAddress}`;
  return await fetch(url).then((resp) => resp.json());
};

const fetchForDomain = async (domain: string): Promise<GeoLocation> => {
  const url = `${baseUrl}?apiKey=${apiKey}&domain=${domain}`;
  return await fetch(url).then((resp) => resp.json());
};

export default async function (
  ipAddressOrDomain: string
): Promise<GeoLocation> {
  if (ipAddressOrDomain === "" || isIp(ipAddressOrDomain)) {
    return fetchForIpAddress(ipAddressOrDomain);
  }

  if (isDomain(ipAddressOrDomain)) {
    return fetchForDomain(ipAddressOrDomain);
  }

  throw Error(`Invalid ipaddress or domain: ${ipAddressOrDomain}`);
}
