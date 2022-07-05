// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import aesthetic_hero from "./aesthetics/home/hero";
import raeumlichkeiten from "./aesthetics/home/raeumlichkeiten";
import imageBox from "./aesthetics/home/imageBox";
import home from "./aesthetics/home/all";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        aesthetic_hero,
        raeumlichkeiten,
        imageBox,
        home,
    ]),
});
