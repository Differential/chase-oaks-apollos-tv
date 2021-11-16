/**
 * note : Added additional check for title. If no title exist in the related node, pass in a separate title
 */

function getPathFromType(node) {
  const [type, randomId] = node?.id?.split(':');

  switch (type) {
    case 'EventContentItem':
    case 'InformationalContentItem':
    case 'MediaContentItem':
    case 'WeekendContentItem':
    case 'UniversalContentItem': {
      return '/watch';
    }

    case 'ContentChannel': {
      return '/channel';
    }
    case 'Url': {
      return node.url;
    }
    default: {
      console.warn(
        `Routing for node type ${type} not set up. Please add it to getPathFromType.js`
      );
      return '/';
    }
  }
}

export default getPathFromType;
