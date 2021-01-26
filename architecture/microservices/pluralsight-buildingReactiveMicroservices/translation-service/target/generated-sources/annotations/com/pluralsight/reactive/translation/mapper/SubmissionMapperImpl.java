package com.pluralsight.reactive.translation.mapper;

import com.pluralsight.reactive.translation.model.domain.Submission;
import com.pluralsight.reactive.translation.model.dto.SubmissionDto;
import java.util.ArrayList;
import java.util.Collection;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-01-26T08:26:22+0000",
    comments = "version: 1.3.1.Final, compiler: Eclipse JDT (IDE) 1.3.1200.v20200916-0645, environment: Java 11.0.10 (AdoptOpenJDK)"
)
@Component
public class SubmissionMapperImpl implements SubmissionMapper {

    @Override
    public SubmissionDto asDto(Submission submission) {
        if ( submission == null ) {
            return null;
        }

        SubmissionDto submissionDto = new SubmissionDto();

        return submissionDto;
    }

    @Override
    public Collection<SubmissionDto> asDto(Collection<Submission> submissions) {
        if ( submissions == null ) {
            return null;
        }

        Collection<SubmissionDto> collection = new ArrayList<SubmissionDto>( submissions.size() );
        for ( Submission submission : submissions ) {
            collection.add( asDto( submission ) );
        }

        return collection;
    }
}
