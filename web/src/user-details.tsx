import { LinkIcon, LocationIcon, MailIcon, OrganizationIcon, PeopleIcon } from "@primer/octicons-react";

import { formatCount } from "./format";
import type { UserProfile } from "./user-profile";

import "./styles/user-details.css";

function UserDetails({
  name,
  username,
  biography,
  avatar_url,
  followers,
  following,
  company,
  location,
  email,
  website
}: UserProfile) {
  return <aside className="user-details">
    <img src={avatar_url} alt="avatar" />
    <header>
      <h1>{name}</h1>
      <h2>{username}</h2>
    </header>
    <p>{biography}</p>
    <button disabled>Follow</button>
    <span><PeopleIcon/> <em>{formatCount(followers)}</em> followers <em>· {formatCount(following)}</em> following</span>
    <ul>
      {company && <li><OrganizationIcon/>{company}</li>}
      {location && <li><LocationIcon/>{location}</li>}
      {email && <li><MailIcon/>{email}</li>}
      {website && <li><LinkIcon/>{website}</li>}
    </ul>
  </aside>
}

export { UserDetails };