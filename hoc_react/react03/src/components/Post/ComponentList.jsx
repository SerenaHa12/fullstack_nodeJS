const ComponentList = ({ listPost }) => {
  return (
    <div className="py-3">
      <h3>Bình luận</h3>
      <div className="mb-3">
        <h5> Tác giả</h5>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. It usually begins with: “Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.” The purpose of lorem ipsum is to
          create a natural looking block of text (sentence, paragraph, page,
          etc.) that doesn't distract from the layout. A practice not without
          controversy, laying out pages with meaningless filler text can be very
          useful when the focus is meant to be on design, not content.
        </p>
      </div>
      {listPost?.map(({ name, content }, i) => {
        console.log({ name, content });
        return (
          <div className="mb-3" key={i}>
            <h5>{name}</h5>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentList;
