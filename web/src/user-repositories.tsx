import { RepoForkedIcon, RepoIcon, StarIcon } from "@primer/octicons-react";
import { Conditional } from "./conditional";
import { formatCount } from "./format";
import type { Repository } from "./user-profile";

import "./styles/user-repositories.css"

function UserRepositories(props: { username: string; repositories: Repository[] }) {
  return (
    <div className="user-repositories">
      <h1>Repositories</h1>
      {props.repositories.length ? (
        <ol>
          {getMainRepositories(props.username, props.repositories).map(repo => (
            <li className="repository-card" key={repo.name}>
              <header>
                <RepoIcon />
                <a
                  href={`https://github.com/${props.username}/${repo.name}`}
                  target="_blank"
                  children={repo.name}
                />
                <span className="visibility">Public</span>
              </header>
              <p>{repo.description}</p>
              <footer>
                <Conditional on={repo.language}>
                  <span className="circle"/>
                  {repo.language}
                </Conditional>
    
                <Conditional on={repo.stars}>
                  <StarIcon/>
                  {formatCount(repo.stars)}
                </Conditional>
                
                <Conditional on={repo.forks}>
                  <RepoForkedIcon/>
                  {formatCount(repo.forks)}
                </Conditional>
              </footer>
            </li>
          ))}
          <li className="remaining-repositories">
            <a
              href={`https://github.com/${props.username}?tab=repositories`}
              target="_blank"
              children="See more"
            />
          </li>
        </ol>
      ) : <h2>{props.username} doesn't have any public repositories yet.</h2>}
    </div>
  );
}

function getMainRepositories(username: string, repositories: Repository[]): Repository[] {
  const filterUserDescription = (repos: Repository[]) => repos.filter((r) => r.name != username);
  const sortByDescendingPopularity = (repos: Repository[]) => repos.sort((a, b) => b.stars - a.stars);
  const getFirstThree = (repos: Repository[]) => repos.slice(0, 3);

  var filteredRepositories = filterUserDescription(repositories);
  var sortedRepositories = sortByDescendingPopularity(filteredRepositories);
  return getFirstThree(sortedRepositories);
}

export { UserRepositories };
