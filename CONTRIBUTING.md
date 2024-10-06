# Contributing

We would ❤️ you to contribute to Klark and help make it better! We want contributing to Klark to be fun, enjoyable, and educational for anyone and everyone. All contributions are welcome, including issues, and new docs, as well as updates and tweaks, blog posts, workshops, and more.

## Here for Hacktoberfest?
If you're here to contribute during Hacktoberfest, we're so happy to see you here. Klark has been a long-time participant of Hacktoberfest and we welcome you, whatever your experience level. This year, we're **only taking contributions for issues tagged** `hacktoberfest`, so we can focus our resources to support your contributions.

You can [find issues using this query](https://github.com/search?q=org%3AKlark+is%3Aopen+type%3Aissue+label%3Ahacktoberfest&type=issues).

## How to Start?

If you are worried or don’t know where to start, check out the next section that explains what kind of help we could use and where you can get involved. You can send your questions to [info@buildingbloques.com](https://info@buildingbloques.com). You can also submit an issue, and a maintainer can guide you!

## Code of Conduct

Help us keep Klark open and inclusive. Please read and follow our [Code of Conduct](https://github.com/Klark/.github/blob/main/CODE_OF_CONDUCT.md).

## Submit a Pull Request 🚀

Branch naming convention is as following

`TYPE-ISSUE_ID-DESCRIPTION`

example:

```
doc-548-submit-a-pull-request-section-to-contribution-guide
```

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

example:

```
feat(components): add new prop to the avatar component
```


If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

For the initial start, fork the project and use git clone command to download the repository to your computer. A standard procedure for working on an issue would be to:

1. `git pull`, before creating a new branch, pull the changes from upstream. Your master needs to be up to date.

```
$ git pull
```

2. Create a new branch from `master` like: `doc-548-submit-a-pull-request-section-to-contribution-guide`.<br/>

```
$ git checkout -b [name_of_your_new_branch]
```

3. Work - commit - repeat (make sure you're on the correct branch!)

4. Before you push your changes, make sure your code follows the `PSR12` coding standards, which is the standard that Klark currently follows. You can easily do this by running the formatter.

```bash
composer format <your file path>
```

Now, go a step further by running the linter using the following command to manually fix the issues the formatter wasn't able to.

```bash
composer lint <your file path>
```

This will give you a list of errors to rectify. If you need more information on the errors, you can pass in additional command line arguments to get more verbose information. More lists of available arguments can be found [here](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Usage). A very useful command line argument is `--report=diff`. This will give you the expected changes by the linter for easy fixing of formatting issues.

```bash
composer lint --report=diff <your file path>
```

5. Push changes to GitHub.

```
$ git push origin [name_of_your_new_branch]
```

6. Submit your changes for review
   If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.
7. Start a Pull Request
   Now submit the pull request and click on `Create pull request`.
8. Get a code review approval/reject.
9. After approval, merge your PR.
10. GitHub will automatically delete the branch after the merge is done. (they can still be restored).


### User Interface

Klark's UI is built with [Next Js](https://nextjs.org/), [HeroIcons](https://heroicons.com/), and the [Tailwind UI](https://tailwindui.com/) component library.


### Get Started

After finishing the installation process, you can start writing and editing code.

#### Advanced Topics

We love to create issues that are good for beginners and label them as `good first issue` or `hacktoberfest`, but some more advanced topics might require extra knowledge. Below is a list of links you can use to learn about the more advanced topics that will help you master the Klark codebase.


## Architecture

Klark's current structure is a combination of both [Monolithic](https://en.wikipedia.org/wiki/Monolithic_application) and [Microservice](https://en.wikipedia.org/wiki/Microservices) architectures.

---

## ![Klark](docs/specs/overview.drawio.svg)

### File Structure

```bash
.
├── src # Main application
│   ├── app # pages files
│   ├── styles # style files
│   ├── components # reusable components
├── public # Public files
│   ├── dist
│   ├── fonts
│   ├── images
│   ├── scripts
│   └── styles
```


## Package Managers

Klark uses a package manager for managing code dependencies for both backend and frontend development. We try our best to avoid creating any unnecessary dependencies. New dependency to the project is subjected to a lead developer's review and approval.

Many of Klark's internal modules are also used as dependencies to allow other Klark projects to reuse them and as a way to contribute back to the community.

Klark uses [PHP's Composer](https://getcomposer.org/) for managing dependencies on the server-side and [JS NPM](https://www.npmjs.com/) for managing dependencies on the frontend side.

## Coding Standards

Klark follows the [PHP-FIG standards](https://www.php-fig.org/). Currently, we use both PSR-0 and PSR-12 for coding standards and autoloading standards.

We use prettier for our JS coding standards and auto-formatting for our code.

## Scalability, Speed, and Performance

Klark is built to scale. Please keep in mind that the Klark stack can run in different environments and different scales.

We intend Klark to be as easy to set up as possible in a single localhost, and to grow easily into a large environment with dozens and even hundreds of instances.

When contributing code, please take into account the following:

- Response Time
- Throughput
- Requests per Seconds
- Network Usage
- Memory Usage
- Browser Rendering
- Background Jobs
- Task Execution Time

## Security and Privacy

Security and privacy are extremely important to Klark, developers, and users alike. Make sure to follow the best industry standards and practices.

## Dependencies

Please avoid introducing new dependencies to Klark without consulting the team. New dependencies can be very helpful, but they also introduce new security and privacy risks, add complexity, and impact the total docker image size.

Adding a new dependency should have vital value for the product with minimum possible risk.

## Introducing New Features

We would 💖 you to contribute to Klark, but we also want to ensure Klark is loyal to its vision and mission statement 🙏.

For us to find the right balance, please open an issue explaining your ideas before introducing a new pull request.

This will allow the Klark community to sufficiently discuss the new feature value and how it fits within the product roadmap and vision.

This is also important for the Klark lead developers to be able to provide technical input and potentially a different emphasis regarding the feature design and architecture. This will help to avoid wasting time and effort on a feature that might not align well with the product.

## Other Ways to Help

Pull requests are great, but there are many other ways you can help Klark.

### Blogging & Speaking

Blogging, speaking about, or creating tutorials about one of Klark’s many features are great ways to get the word out about Klark. Mention [@Klark](https://twitter.com/Klark) on Twitter and/or [email info@buildingbloques.com](mailto:info@buildingbloques.com) so we can give pointers and tips and help you spread the word by promoting your content on the different Klark communication channels. Please add your blog posts and videos of talks to our [Awesome Klark](https://github.com/Klark/awesome-Klark) repo on GitHub.

### Presenting at Meetups

We encourage our contributors to present at meetups and conferences about your Klark projects. Your unique challenges and successes in building things with Klark can provide great speaking material. We’d love to review your talk abstract/CFP, so get in touch with us if you’d like some help!

### Sending Feedbacks and Reporting Bugs

Sending feedback is a great way for us to understand your different use cases of Klark better. If you had any issues, bugs, or want to share your experience, feel free to do so on our GitHub issues page or at our [Discord channel](https://discord.gg/GSeTUeA).

### Submitting New Ideas

If you think Klark could use a new feature, please open an issue on our GitHub repository, stating as much information as you have about your new idea and its implications. We would also use this issue to gather more information, get more feedback from the community, and have a proper discussion about the new feature.

### Improving Documentation

Submitting documentation updates, enhancements, designs, or bug fixes, as well as spelling or grammar fixes is much appreciated.

### Helping Someone

Consider searching for Klark on Discord, GitHub, or StackOverflow to help someone who needs help. You can also help by teaching others how to contribute to Klark's repo!